import { colors } from "~theme";

type SVG = {
  color?: string;
  width?: number;
  height?: number;
};

export function Bin({
  color = colors.lightLighten,
  ...props
}: SVG): JSX.Element {
  return (
    <svg
      {...props}
      viewBox="-40 0 427 427.001"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M232.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0M114.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0"
      />
      <path
        fill={color}
        d="M28.398 127.121V373.5c0 14.563 5.34 28.238 14.668 38.05A49.246 49.246 0 0078.796 427H268a49.233 49.233 0 0035.73-15.45c9.329-9.812 14.668-23.487 14.668-38.05V127.121c18.543-4.922 30.559-22.836 28.079-41.863-2.485-19.024-18.692-33.254-37.88-33.258h-51.199V39.5a39.289 39.289 0 00-11.539-28.031A39.288 39.288 0 00217.797 0H129a39.288 39.288 0 00-28.063 11.469A39.289 39.289 0 0089.398 39.5V52H38.2C19.012 52.004 2.805 66.234.32 85.258c-2.48 19.027 9.535 36.941 28.078 41.863zM268 407H78.797c-17.098 0-30.399-14.688-30.399-33.5V128h250v245.5c0 18.813-13.3 33.5-30.398 33.5zM109.398 39.5a19.25 19.25 0 015.676-13.895A19.26 19.26 0 01129 20h88.797a19.26 19.26 0 0113.926 5.605 19.244 19.244 0 015.675 13.895V52h-128zM38.2 72h270.399c9.941 0 18 8.059 18 18s-8.059 18-18 18H38.199c-9.941 0-18-8.059-18-18s8.059-18 18-18zm0 0"
      />
      <path
        fill={color}
        d="M173.398 154.703c-5.523 0-10 4.477-10 10v189c0 5.52 4.477 10 10 10 5.524 0 10-4.48 10-10v-189c0-5.523-4.476-10-10-10zm0 0"
      />
    </svg>
  );
}

export const Heart = ({
  color = colors.lightLighten,
  width = 20,
  ...props
}: SVG): JSX.Element => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M11.466 22.776a.746.746 0 001.068 0l9.594-9.721C26.129 9.002 23.286 2 17.596 2 14.179 2 12.611 4.511 12 4.98 11.386 4.509 9.828 2 6.404 2 .732 2-2.146 8.984 1.873 13.055z"
    />
  </svg>
);

export const LeftArrow = ({
  color = colors.lightLighten,
  width = 20,
  ...props
}: SVG): JSX.Element => {
  return (
    <svg
      {...props}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 447.243 447.243"
    >
      <path
        fill={color}
        d="M420.361 192.229a31.967 31.967 0 00-5.535-.41H99.305l6.88-3.2a63.998 63.998 0 0018.08-12.8l88.48-88.48c11.653-11.124 13.611-29.019 4.64-42.4-10.441-14.259-30.464-17.355-44.724-6.914a32.018 32.018 0 00-3.276 2.754l-160 160c-12.504 12.49-12.515 32.751-.025 45.255l.025.025 160 160c12.514 12.479 32.775 12.451 45.255-.063a32.084 32.084 0 002.745-3.137c8.971-13.381 7.013-31.276-4.64-42.4l-88.32-88.64a64.002 64.002 0 00-16-11.68l-9.6-4.32h314.24c16.347.607 30.689-10.812 33.76-26.88 2.829-17.445-9.019-33.88-26.464-36.71z"
      />
    </svg>
  );
};

export const Loading = ({ color = "#38a1f2", ...props }: SVG): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      style={{ margin: "20px auto" }}
      height="30"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke={color}
        strokeWidth="10"
        r="40"
        strokeDasharray="188.49555921538757 64.83185307179586"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
};

export const Comment = ({
  color = colors.lightLighten,
  width = 20,
  ...props
}: SVG): JSX.Element => {
  return (
    <svg
      {...props}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <path
        fill={color}
        d="M6 2h48c3.252 0 6 2.748 6 6v33c0 3.252-2.748 6-6 6H25.442L15.74 57.673a1.003 1.003 0 01-1.101.26A1 1 0 0114 57V47H6c-3.252 0-6-2.748-6-6V8c0-3.252 2.748-6 6-6z"
      />
    </svg>
  );
};
