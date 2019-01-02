import React, {Fragment} from 'react';

import PalettesList from '../PalettesList/container';

const Sidebar = ({match}) => {

  return (
    <Fragment>
      <PalettesList type="circles"/>
    </Fragment>
    );
};

export default Sidebar;
