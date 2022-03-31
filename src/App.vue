<template>
  <div>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input type="text" id="title" v-model.lazy="eventData.title" />
      <p>{{ eventData.title }}</p>
      <label for="detail">イベントの内容</label>
      <textarea
        id="detail"
        cols="30"
        rows="10"
        v-model="eventData.detail"
      ></textarea>
      <pre>{{ eventData.detail }}</pre>
      <label for="isPrivate">非公開</label>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" />
      <p>{{ eventData.isPrivate }}</p>
      <p>参加条件</p>
      <label for="10">10代</label>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target" />
      <label for="20">20代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target" />
      <label for="30">30代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target" />
      <p>{{ eventData.target }}</p>
      <p>参加費</p>
      <label for="free">無料</label>
      <input type="radio" id="free" value="無料" v-model="eventData.price" />
      <label for="paid">有料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price" />
      <p>開催場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">
          {{ location }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import LikeNumber from "./components/LikeNumber";

export default {
  components: {
    LikeNumber,
  },
  data() {
    return {
      number: 14,
      locations: ["東京", "大阪", "名古屋"],
      eventData: {
        title: "",
        maxNumber: 0,
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "",
      },
    };
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    },
  },
};
</script>
