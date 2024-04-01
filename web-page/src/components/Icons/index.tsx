import cx from 'classnames'

interface IconProps {
  className?: string
}

export const CameraIcon: React.FC<IconProps> = ({ className = 'h-6 w-6' }) => (
  <svg
    data-slot="icon"
    fill="none"
    strokeWidth="1.5"
    className={cx(className)}
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
    ></path>
  </svg>
)

export const TrashIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={cx(className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clip-rule="evenodd" d="M5.8662 8.15407C6.29365 8.16442 6.63173 8.5171 6.62131 8.94181L5.84735 8.92308L5.07338 8.90434C5.0838 8.47963 5.43876 8.14373 5.8662 8.15407ZM5.84735 8.92308C5.07338 8.90434 5.07338 8.90434 5.07338 8.90434L5.07235 8.94807L5.06956 9.07238C5.06721 9.18044 5.06396 9.33725 5.06034 9.53284C5.05312 9.92395 5.04446 10.4705 5.03868 11.0925C5.02716 12.333 5.02698 13.8865 5.07371 15.1062C5.12484 16.4402 5.26247 18.1669 5.37603 19.4527C5.50429 20.9048 6.73177 22 8.18698 22H15.813C17.2682 22 18.4957 20.9048 18.624 19.4527C18.7375 18.1669 18.8752 16.4402 18.9263 15.1062C18.973 13.8865 18.9728 12.333 18.9613 11.0925C18.9555 10.4705 18.9469 9.92395 18.9397 9.53284C18.936 9.33725 18.9328 9.18044 18.9304 9.07238L18.9277 8.94807L18.9266 8.90515C18.9162 8.48044 18.5612 8.14373 18.1338 8.15407C17.7063 8.16442 17.3683 8.5171 17.3787 8.94181L17.8719 8.92987C17.3787 8.94181 17.3787 8.94181 17.3787 8.94181L17.3797 8.98354L17.3824 9.10565C17.3847 9.2122 17.388 9.36732 17.3915 9.56106C17.3987 9.94862 17.4073 10.4903 17.413 11.1067C17.4245 12.3427 17.4243 13.8661 17.379 15.0477C17.3295 16.3412 17.1948 18.0358 17.0815 19.3182C17.0245 19.9641 16.4774 20.4615 15.813 20.4615H8.18698C7.52258 20.4615 6.97554 19.9641 6.91849 19.3182C6.80522 18.0358 6.67055 16.3412 6.62098 15.0477C6.5757 13.8661 6.57552 12.3427 6.587 11.1067C6.59273 10.4903 6.60132 9.94862 6.60847 9.56106C6.61205 9.36732 6.61527 9.2122 6.61759 9.10565L6.62032 8.98354L6.62131 8.94181L5.84735 8.92308Z" fill="#8E4728" />
    <path fillRule="evenodd" clip-rule="evenodd" d="M4 5.84615C4 5.42132 4.34662 5.07692 4.77419 5.07692H19.2258C19.6534 5.07692 20 5.42132 20 5.84615C20 6.27099 19.6534 6.61539 19.2258 6.61539H4.77419C4.34662 6.61539 4 6.27099 4 5.84615Z" fill="#8E4728" />
    <path fillRule="evenodd" clip-rule="evenodd" d="M8.25655 3.49321C8.7499 2.57411 9.71292 2 10.7613 2H13.2387C14.2871 2 15.2501 2.57411 15.7435 3.49321L16.8121 5.48416C17.0134 5.85902 16.8706 6.32497 16.4934 6.52489C16.1161 6.72481 15.6471 6.583 15.4459 6.20815L14.3772 4.21719C14.153 3.79942 13.7152 3.53846 13.2387 3.53846H10.7613C10.2848 3.53846 9.84702 3.79942 9.62277 4.21719L8.55408 6.20815C8.35287 6.583 7.88391 6.72481 7.50664 6.52489C7.12937 6.32497 6.98664 5.85902 7.18786 5.48416L8.25655 3.49321Z" fill="#8E4728" />
  </svg>
)

export const XIcon: React.FC<IconProps> = ({ className }) => (
  <svg fill="#8E4728" className={cx(className)} height='22px' width='22px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"/>
  <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"/>
  </svg>
)