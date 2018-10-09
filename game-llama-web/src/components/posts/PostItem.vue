<template>
    <div class="post-body">
      <v-container flow grid-list-md >
          <v-layout row justify-space-between>
            <v-flex xs1>

            </v-flex>
            <v-flex xs8>
              <div class="llama_card_title_box">
                <p class="llama_card_title_padding llama_card_title_text_bold">
                  <span>
                    Sad Mountains
                  </span>
                  <span class="llama_card_title_text_normal">
                    by
                  </span>
                  <span class="llama_card_title_text_italic">
                    Mark B.
                  </span>
                  (<span class="llama_card_title_text_blue">follow</span>)
                </p>
              </div>
              <v-card width="540px">
                <v-img
                  class="white--text llama_image_shaddow"
                  width="540px"
                  src="https://udemy-images.udemy.com/course/750x422/1408678_dcd2.jpg"
                >
                </v-img>
                <v-card-title>
                  <div style="width: 540px;">
                    <span class="grey--text">Techinical Features</span><br>
                    <v-data-table
                      :headers="headers"
                      :items="desserts"
                      hide-actions
                      class="elevation-1"
                    >
                      <template slot="items" slot-scope="props">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.calories }}</td>
                      </template>
                    </v-data-table>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <span class="-spites-with-love">251</span>
                  <span class="-spites-with-love-text-style-1">spites with</span>
                  <span class="-spites-with-love-text-style-2"> love</span>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs1>

            </v-flex>
          </v-layout>
      </v-container>
    </div>
</template>

<script>

export default {
  data() {
    return {
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
      ],
      headers: [
        {
          text: 'Feature',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Values', value: 'calories' },
      ],
      desserts: [
        {
          value: false,
          name: 'Type',
          calories: '159',
        },
        {
          value: false,
          name: 'Size',
          calories: 237,
        },
        {
          value: false,
          name: 'Game',
          calories: 262,
        },
        {
          value: false,
          name: 'Views',
          calories: 305,
        },
      ],
    };
  },
};
</script>
