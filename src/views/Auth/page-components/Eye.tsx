import { EyeStyles } from './eye-styles';

interface Props {
  eyeDirection: 'left' | 'right';
  closeEye: boolean;
}

export const Eye = ({ eyeDirection, closeEye }: Props) => {
  return (
    <EyeStyles eyeIsOpen={closeEye}>
      <div className={`eye center ${eyeDirection}`}>
        <div className={`eyelid-wrapper ${eyeDirection}`}>
          <div className="eyelid"></div>
        </div>
        <div className="eyeball"></div>
      </div>
    </EyeStyles>
  );
};
