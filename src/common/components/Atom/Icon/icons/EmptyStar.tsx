import { IconProps } from '@components/Atom/Icon/type';
import { Icon } from 'src/common/components/Atom/Icon/Icon';

export function EmptyStar(props: Readonly<IconProps>) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 1.62747L11.9214 6.24697C12.1014 6.67976 12.5084 6.97547 12.9756 7.01293L17.9627 7.41275L14.1631 10.6676C13.8071 10.9725 13.6516 11.451 13.7604 11.9069L14.9212 16.7735L10.6516 14.1656C10.2515 13.9213 9.74845 13.9213 9.34843 14.1656L5.07875 16.7735L6.23961 11.9069C6.34837 11.451 6.19291 10.9725 5.83692 10.6676L2.03726 7.41275L7.02438 7.01293C7.49162 6.97547 7.89863 6.67976 8.07864 6.24697L10 1.62747Z"
          stroke="#A7A7A7"
          strokeWidth="1.25"
        />
      </svg>
    </Icon>
  );
}
