import React from "react";

const Info = () => {
  return (
    <div style={{ marginTop: 40 }}>
      <p>
        The app, like the combo chart, is meant as a quick reference guide and
        additional research <strong>MUST</strong> always be done. For additional
        information check out our{" "}
        <a
          href="http://drugs.tripsit.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Factsheet.
        </a>
      </p>
      <p>
        For re-use and attribution info see{" "}
        <a
          href="https://wiki.tripsit.me/wiki/Drug_combinations#Use_.26_Attribution"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
      </p>
      <a
        href="http://tripsit.me/contact-us/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Notice something wrong with this page? Let us know!
      </a>
    </div>
  );
};

export default Info;
