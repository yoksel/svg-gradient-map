import React, {Fragment} from 'react';

import ColorsPairsList from '../../containers/ColorsPairsList';

const Sidebar = ({match}) => {

  return (
    <Fragment>
      <ColorsPairsList type="circles"/>
    </Fragment>
    );
};

export default Sidebar;
