const filtersList = {
  'dark-blue-sepia-R': {
    data: {
      palette: 'dark-blue-sepia',
      channel: 'red',
    },
    code: `<filter id="dark-blue-sepia-R" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.29 0.15 0.97"/>
    <feFuncG type="table" tableValues="0.04 0.39 0.93"/>
    <feFuncB type="table" tableValues="0.32 0.52 0.73"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'dark-blue-sepia-G': {
    data: {
      palette: 'dark-blue-sepia',
      channel: 'green',
    },
    code: `<filter id="dark-blue-sepia-G" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="0 1 0 0 0
            0 1 0 0 0
            0 1 0 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.29 0.15 0.97"/>
    <feFuncG type="table" tableValues="0.04 0.39 0.93"/>
    <feFuncB type="table" tableValues="0.32 0.52 0.73"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'dark-blue-sepia-B': {
    data: {
      palette: 'dark-blue-sepia',
      channel: 'blue',
    },
    code: `<filter id="dark-blue-sepia-B" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="0 0 1 0 0
            0 0 1 0 0
            0 0 1 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.29 0.15 0.97"/>
    <feFuncG type="table" tableValues="0.04 0.39 0.93"/>
    <feFuncB type="table" tableValues="0.32 0.52 0.73"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'purple-warm-blue': {
    data: {
      palette: 'purple-warm',
      channel: 'green',
    },
    code: `<filter id="purple-warm-blue" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="0 1 0 0 0
            0 1 0 0 0
            0 1 0 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.52 0.97 1"/>
    <feFuncG type="table" tableValues="0 0.62 1"/>
    <feFuncB type="table" tableValues="0.51 0.39 0.89"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'x-rays-green': {
    data: {
      palette: 'x-rays',
      channel: 'green',
    },
    code: `<filter id="x-rays-green" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="0 1 0 0 0
            0 1 0 0 0
            0 1 0 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.98 0.3 0.25"/>
    <feFuncG type="table" tableValues="1 0.44 0.24"/>
    <feFuncB type="table" tableValues="0.91 0.62 0.39"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'green-pink-acid-B': {
    data: {
      palette: 'green-pink-acid',
      channel: 'blue',
    },
    code: `<filter id="green-pink-acid-B" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="0 0 1 0 0
            0 0 1 0 0
            0 0 1 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="1 0.98 0.1"/>
    <feFuncG type="table" tableValues="0.17 1 0.82"/>
    <feFuncB type="table" tableValues="0.7 0.84 0.67"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

};

export default filtersList;
