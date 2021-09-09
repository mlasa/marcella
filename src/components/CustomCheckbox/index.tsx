import React, { useState } from 'react'
import { IconBaseProps } from 'react-icons'
import styles from './styles.module.scss'

interface CheckBoxProps {
  icon?: React.ComponentType<IconBaseProps>
  classCheckBox: string;
  action(): void;
}

const Checkbox: React.FC<CheckBoxProps> = ({ icon: Icon, ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);
  function doAction() {
    rest.action()
    setIsChecked(!isChecked)
  }

  return (
    <span>
      <div className={rest.classCheckBox} >
        {Icon && <Icon size={25} />}
        <label className={styles.switch} >
          <input type="checkbox" checked={isChecked} onClick={() => doAction()} />
          <span />
        </label>
      </div>
    </span>
  )
}
export default Checkbox