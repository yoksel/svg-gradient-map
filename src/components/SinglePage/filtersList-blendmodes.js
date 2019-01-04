const filtersList = {
  'dark-crimson-sepia-screen': {
    data: {
      palette: 'dark-crimson-sepia',
      blendmode: 'screen'
    },
    code: `<filter id="dark-crimson-sepia-screen" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.01 0.52 0.97"/>
    <feFuncG type="table" tableValues="0 0.05 0.81"/>
    <feFuncB type="table" tableValues="0.02 0.29 0.61"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="screen" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'spring-grass-overlay': {
    data: {
      palette: 'spring-grass',
      blendmode: 'overlay'
    },
    code: `<filter id="spring-grass-overlay" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0 0.38 0.92"/>
    <feFuncG type="table" tableValues="0.5 0.8 1"/>
    <feFuncB type="table" tableValues="0.5 0.56 0.74"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="overlay" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'spring-grass-b-lighten': {
    data: {
      palette: 'spring-grass',
      channel: 'blue',
      blendmode: 'lighten'
    },
    code: `<filter id="spring-grass-b-lighten" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="0 0 1 0 0
            0 0 1 0 0
            0 0 1 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0 0.38 0.92"/>
    <feFuncG type="table" tableValues="0.5 0.8 1"/>
    <feFuncB type="table" tableValues="0.5 0.56 0.74"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="lighten" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'golden-x-rays-soft-light': {
    data: {
      palette: 'golden-x-rays',
      blendmode: 'soft-light'
    },
    code: `<filter id="golden-x-rays-soft-light" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.98 1 0.94"/>
    <feFuncG type="table" tableValues="1 0.98 0.44"/>
    <feFuncB type="table" tableValues="0.91 0.43 0.02"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="soft-light" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'green-pink-acid-soft-light': {
    data: {
      palette: 'green-pink-acid',
      channel: 'blue',
      blendmode: 'soft-light'
    },
    code: `<filter id="green-pink-acid-soft-light" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
  <feBlend mode="soft-light" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'dark-green-sepia-blue-color': {
    data: {
      palette: 'dark-green-sepia',
      channel: 'blue',
      blendmode: 'color'
    },
    code: `<filter id="dark-green-sepia-blue-color" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="0 0 1 0 0
            0 0 1 0 0
            0 0 1 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.25 0.39 0.96"/>
    <feFuncG type="table" tableValues="0.16 0.52 0.97"/>
    <feFuncB type="table" tableValues="0.06 0.39 0.78"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="color" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'green-pink-acid-B-color': {
    data: {
      palette: 'green-pink-acid',
      channel: 'blue',
      blendmode: 'color'
    },
    code: `<filter id="green-pink-acid-B-color" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
  <feBlend mode="color" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'sepia-color': {
    data: {
      palette: 'sepia',
      blendmode: 'color'
    },
    code: `<filter id="sepia-color" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.26 0.95"/>
    <feFuncG type="table" tableValues="0.19 0.78"/>
    <feFuncB type="table" tableValues="0.11 0.59"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="color" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'x-rays-b-overlay': {
    data: {
      palette: 'x-rays',
      channel: 'blue',
      blendmode: 'overlay'
    },
    code: `<filter id="x-rays-b-overlay" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="0 0 1 0 0
            0 0 1 0 0
            0 0 1 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.98 0.3 0.25"/>
    <feFuncG type="table" tableValues="1 0.44 0.24"/>
    <feFuncB type="table" tableValues="0.91 0.62 0.39"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="overlay" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },
};

export default filtersList;
