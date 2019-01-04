/* eslint-disable max-len */

const filtersList = {
  'sepia': {
    data: {
      palette: 'sepia'
    },
    code: `<filter id="sepia" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
  <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'spring-grass': {
    data: {
      palette: 'spring-grass'
    },
    code: `<filter id="spring-grass" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
  <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'cherry-icecream': {
    data: {
      palette: 'cherry-icecream'
    },
    code: `<filter id="cherry-icecream" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.84 1"/>
    <feFuncG type="table" tableValues="0.05 0.94"/>
    <feFuncB type="table" tableValues="0.37 0.61"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'gold-sunset': {
    data: {
      palette: 'gold-sunset'
    },
    code: `<filter id="gold-sunset" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="1 0 0 0 0
1 0 0 0 0
1 0 0 0 0
0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.27 0.86 1"/>
    <feFuncG type="table" tableValues="0.01 0.31 0.95"/>
    <feFuncB type="table" tableValues="0.02 0.02 0.02"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'dark-green-sepia': {
    data: {
      palette: 'dark-green-sepia'
    },
    code: `<filter id="dark-green-sepia" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.25 0.39 0.96"/>
    <feFuncG type="table" tableValues="0.16 0.52 0.97"/>
    <feFuncB type="table" tableValues="0.06 0.39 0.78"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },

  'warm-sea': {
    data: {
      palette: 'warm-sea'
    },
    code: `<filter id="warm-sea" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feColorMatrix type="matrix" values="1 0 0 0 0
1 0 0 0 0
1 0 0 0 0
0 0 0 1 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" result="colormatrix"/>
  <feComponentTransfer x="0%" y="0%" width="100%" height="100%" in="colormatrix" result="componentTransfer">
        <feFuncR type="table" tableValues="0.29 0.01 0.97"/>
    <feFuncG type="table" tableValues="0.12 0.52 0.94"/>
    <feFuncB type="table" tableValues="0.37 0.59 0.47"/>
    <feFuncA type="table" tableValues="0 1"/>
    </feComponentTransfer>
  <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
</filter>`
  },


};

export default filtersList;
