import * as React from 'react';

type Props = {
  title: string
};

export const Header = ({ title }: Props) => {
  return (
    <>
      <div className="header-top">
        <img
          src="https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/logo-fullcycle.png"
          alt="fullcycle logo"
        />
        <img
          src="https://avatars.githubusercontent.com/u/50778558?v=4"
          alt="github profile"
          className="avatar"
        />
      </div>
      <h2>{title}</h2>
    </>
  );
};


