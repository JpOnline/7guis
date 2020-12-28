(ns seven-guis.sg-crud
  (:require
[cljs.test :refer [is testing]]
    [clojure.string :as string]
    [reagent.core :as reagent]
    [seven-guis.util :as util]))

(defonce component-state (reagent/atom {:domain [{:id 0 :name "Jp" :surname "Soares"}]
                                        :ui {:filter-prefix ""
                                             :selected-id -1
                                             :name ""
                                             :surname ""}}))

(defn filtered-names [{names :domain {:keys [filter-prefix]} :ui}]
  (filter #(string/starts-with? (string/lower-case (:surname %))
                                (string/lower-case filter-prefix))
          names))

(defn create-name [{{:keys [name surname]} :ui names :domain :as state}]
  (let [next-id (inc (:id (last names)))
        t-sur (string/trim surname)
        t-name (string/trim name)]
    (if (or (empty? t-sur) (empty? t-name))
      state
      (-> state
        (update :domain conj {:id next-id :name t-name :surname t-sur})
        (update :ui assoc :name "")
        (update :ui assoc :surname "")))))

(defn find-pred
  "Returns the first element of coll that satisfy the predicate f."
  [f coll]
  (some #(if (f %) %) coll))

(defn select-name [{names :domain :as state} selected-id]
  (let [{:keys [name surname]} (find-pred #(= (:id %) (js/parseInt selected-id)) names)]
    (-> state
      (assoc :selected-id selected-id)
      (assoc-in [:ui :name] name)
      (assoc-in [:ui :surname] surname))))

(defn component-style []
  [:style
    "
    #container {
      display: grid;
      gap: 5px;
    }
    label[for=filter] {
      grid-row: 1/2;
      grid-column: 1/2;
    }
    #filter {
      grid-row: 1/2;
      grid-column: 2/3;
    }
    select {
      min-width: 130px;
      grid-row: 2/5;
      grid-column: 1/3;
    }
    label[for=name] {
      grid-row: 2/3;
      grid-column: 3/4;
    }
    #name {
      grid-row: 2/3;
      grid-column: 4/5;
    }
    label[for=surname] {
      grid-row: 3/4;
      grid-column: 3/4;
    }
    #surname {
      grid-row: 3/4;
      grid-column: 4/5;
    }
    #buttons {
      grid-row: 5/6;
      grid-column: 1/3;
      display: flex;
      justify-content: space-evenly;
    }"])

(def avoid-multiple-selection
  #(set! (-> % .-target .-selectedIndex) (-> % .-target .-selectedIndex)))

(defn component []
  [:<>
   [component-style]
   [:div#container
    [:label {:for "filter"} "Filter prefix:"]
    [:input#filter
     {:type "text"
      :onChange #(swap! component-state
                        update :ui
                        assoc :filter-prefix  (-> % .-target .-value))}]
    [:select {:multiple true
              :onChange #(do
                           (js/console.log %)
                           (swap! component-state select-name (-> % .-target .-value))
                           (avoid-multiple-selection %))}
     (for [{:keys [name surname id]} (filtered-names @component-state)]
       ^{:key id}
       [:option {:value id} (str surname", "name)])]
    [:label {:for "name"} "Name:"]
    [:input#name
     {:type "text"
      :value (get-in @component-state [:ui :name])
      :onChange #(swap! component-state
                        update :ui
                        assoc :name  (-> % .-target .-value))}]
    [:label {:for "surname"} "Surname:"]
    [:input#surname
     {:type "text"
      :value (get-in @component-state [:ui :surname])
      :onChange #(swap! component-state
                        update :ui
                        assoc :surname  (-> % .-target .-value))}]
    [:div#buttons
     [:button
      {:onClick #(swap! component-state create-name)}
      "Create"]
     [:button "Update"]
     [:button "Delete"]]]])

(defn ^:dev/after-load register-component! []
  (util/define-custom-element! {:element-name "sg-crud"
                                :view-component component}))

(register-component!)

(comment
  (swap! component-state update :domain conj {:name "Jp" :surname "another"})

  (require '[cljs.test :refer [is testing]])
  (testing
    (is (= (-> {:domain [{:name "Jp" :surname "Soares"}]
                :ui {:filter-prefix ""
                     :name "name"
                     :surname "another"}}
               (create-name))
           {:domain [{:name "Jp" :surname "Soares"}
                     {:name "name" :surname "another"}]
                :ui {:filter-prefix ""
                     :name ""
                     :surname ""}}))
    (is (= (-> {:domain [{:name "Jp" :surname "Soares"}]
                :ui {:filter-prefix ""
                     :name " with "
                     :surname " spaces "}}
               (create-name))
           {:domain [{:name "Jp" :surname "Soares"}
                     {:name "with" :surname "spaces"}]
                :ui {:filter-prefix ""
                     :name ""
                     :surname ""}}))
    (is (= (-> {:domain [{:name "Jp" :surname "Soares"}]
                :ui {:filter-prefix ""
                     :name "no surname"
                     :surname ""}}
               (create-name))
           {:domain [{:name "Jp" :surname "Soares"}]
                :ui {:filter-prefix ""
                     :name "no surname"
                     :surname ""}}))
    )
  )
