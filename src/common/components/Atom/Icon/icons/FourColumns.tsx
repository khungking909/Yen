import { Icon } from 'src/common/components/Atom/Icon/Icon';
import { IconProps } from 'src/common/components/Atom/Icon/type';

export function FourColumns(props: Readonly<IconProps>) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 3.75C6.5 3.33579 6.16421 3 5.75 3C5.33579 3 5 3.33579 5 3.75V19.75C5 20.1642 5.33579 20.5 5.75 20.5C6.16421 20.5 6.5 20.1642 6.5 19.75V3.75ZM10.5 3.75C10.5 3.33579 10.1642 3 9.75 3C9.33579 3 9 3.33579 9 3.75V19.75C9 20.1642 9.33579 20.5 9.75 20.5C10.1642 20.5 10.5 20.1642 10.5 19.75V3.75ZM13.75 3C14.1642 3 14.5 3.33579 14.5 3.75V19.75C14.5 20.1642 14.1642 20.5 13.75 20.5C13.3358 20.5 13 20.1642 13 19.75V3.75C13 3.33579 13.3358 3 13.75 3ZM18.5 3.75C18.5 3.33579 18.1642 3 17.75 3C17.3358 3 17 3.33579 17 3.75V19.75C17 20.1642 17.3358 20.5 17.75 20.5C18.1642 20.5 18.5 20.1642 18.5 19.75V3.75Z"
          fill="currentColor"
        />
      </svg>
    </Icon>
  );
}
