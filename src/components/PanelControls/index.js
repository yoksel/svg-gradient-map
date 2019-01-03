import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './PanelControls.css';

const PanelControls = ({
  duplicatePrimitive,
  removePrimitive,
  togglePrimitive,
  primitiveDisabled,
  toggleDocs,
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
        onClick={togglePrimitive}
        type="button"
      >
        <Icon
          symbol={primitiveDisabled ? 'eye' : 'eye-blocked'}
          color="currentColor"
          size="16"/>
      </button>

      <button
        className="PanelControl PanelControl--add"
        onClick={duplicatePrimitive}
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
        onClick={removePrimitive}
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
  duplicatePrimitive: PropTypes.func,
  removePrimitive: PropTypes.func,
  togglePrimitive: PropTypes.func,
  toggleDocs: PropTypes.func,
  primitiveDisabled: PropTypes.bool,
  hasResult: PropTypes.bool,
  section: PropTypes.string,
  id: PropTypes.string,
  parentId: PropTypes.string,
  groupName: PropTypes.string,
  hasChildrenMod: PropTypes.string,
  parentHasSingleChild: PropTypes.bool,
  noChangesForChildren: PropTypes.bool,
};
