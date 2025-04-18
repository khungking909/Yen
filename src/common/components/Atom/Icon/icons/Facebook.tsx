import { Icon } from 'src/common/components/Atom/Icon/Icon';
import { IconProps } from 'src/common/components/Atom/Icon/type';

export function Facebook(props: Readonly<Readonly<IconProps>>) {
  return (
    <Icon {...props}>
      <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#0D99FF" />
        <path
          d="M12.7087 20.3038V14.7503H10.8398V12.5859H12.7087V10.9898C12.7087 9.13752 13.84 8.12891 15.4924 8.12891C16.2839 8.12891 16.9642 8.18784 17.1624 8.21417V10.1499L16.0164 10.1505C15.1178 10.1505 14.9438 10.5775 14.9438 11.2041V12.5859H17.087L16.8079 14.7503H14.9438V20.3038H12.7087Z"
          fill="white"
        />
      </svg>
    </Icon>
  );
}
