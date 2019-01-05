import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './PanelControls.css';

const PanelControls = ({
  duplicateItem,
  removeItem,
  toggleItem,
  itemDisabled,
  hasResult,
  section,
  id,
  parentId,
  groupName,
  hasChildrenMod,
  parentHasSingleChild,
  noChangesForChildren
}) => {
  const panelClassList = [
    'PanelControls',
    `PanelControls--${hasChildrenMod}`
  ];

  if (!hasResult) {
    panelClassList.push('PanelControls--no-result');
  }
  if (parentHasSingleChild) {
    panelClassList.push('PanelControls--parentHasSingleChild');
  }

  return (
    <div className={panelClassList.join(' ')}>
      <button
        className="PanelControl PanelControl--toggle"
        onClick={toggleItem}
        type="button"
      >
        <Icon
          symbol={itemDisabled ? 'eye' : 'eye-blocked'}
          color="currentColor"
          size="16"/>
      </button>

      <button
        className="PanelControl PanelControl--add"
        onClick={duplicateItem}
        type="button"
      >
        <Icon
          symbol="plus"
          color="currentColor"
          size="14"/>
      </button>

      <button
        className="PanelControl PanelControl--remove"
        type="button"
        onClick={removeItem}
      >
        <Icon
          symbol="cross"
          color="currentColor"
          size="13"/>
      </button>

    </div>
  );
};

export default PanelControls;

PanelControls.propTypes = {
  duplicateItem: PropTypes.func,
  removeItem: PropTypes.func,
  toggleItem: PropTypes.func,
  itemDisabled: PropTypes.bool,
  hasResult: PropTypes.bool,
  section: PropTypes.string,
  id: PropTypes.string,
  parentId: PropTypes.string,
  groupName: PropTypes.string,
  hasChildrenMod: PropTypes.string,
  parentHasSingleChild: PropTypes.bool,
  noChangesForChildren: PropTypes.bool,
};
