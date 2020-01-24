export const gameMixin = {
  data() {
    return {
      firstTile: undefined,
      secondTile: undefined,
      imagesSelected: [],
      cards: 0,
      scoreTimes: [],
      dataScores: ''
    };
  },
  methods: {
    turnTile(e) {
      e.target.firstChild.classList.remove('image-tile-turned');
    },
    addTiles(e) {
      if (
        e.target.classList.contains('game-tiles') ||
        e.target.classList.contains('empty-square')
      ) {
        return;
      }
      if (typeof this.firstTile !== 'undefined') {
        this.secondTile = e.target.firstChild;
      } else {
        this.firstTile = e.target.firstChild;
      }
      this.imagesSelected.push(e.target.firstChild.src);
      if (this.imagesSelected.length === 2) {
        if (this.imagesSelected[0] === this.imagesSelected[1]) {
          this.cards += 2;
          this.imagesSelected = [];
          this.firstTile = undefined;
          this.secondTile = undefined;
        } else {
          this.imagesSelected = [];
          this.$refs.game.style.pointerEvents = 'none';
          setTimeout(() => {
            this.firstTile.classList.add('image-tile-turned');
            this.secondTile.classList.add('image-tile-turned');
            this.firstTile = undefined;
            this.secondTile = undefined;
            this.$refs.game.style.pointerEvents = 'auto';
          }, 750);
        }
      }
    },
    sortScores() {
      this.scoreTimes.sort((a, b) => (a > b ? 1 : -1));
    }
  },
  created() {
    for (let i = 0; i < this.images.length; i++) {
      const random = Math.floor(Math.random() * (i + 1));
      [this.images[i], this.images[random]] = [
        this.images[random],
        this.images[i]
      ];
    }
  }
};
