import { FooterVariation } from '@digi/arbetsformedlingen';
import { DigiFooter, DigiFooterCard } from '@digi/arbetsformedlingen-react';

export const Footer = () => {
  return (
    <>
      <DigiFooter afVariation={FooterVariation.SMALL}>
        <div slot="content-top">
          <DigiFooterCard>
            <h2>Rubrik</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              magna neque, interdum vel massa eget, condimentum rutrum velit.
              Sed vitae ullamcorper sem. Aliquam malesuada nunc sed purus mollis
              scelerisque. Curabitur bibendum leo quis ante porttitor tincidunt.
              nibh.
            </p>
          </DigiFooterCard>
          <DigiFooterCard>
            <h2>Rubrik</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              magna neque, interdum vel massa eget, condimentum rutrum velit.
              Sed vitae ullamcorper sem. Aliquam malesuada nunc sed purus mollis
              scelerisque. Curabitur bibendum leo quis ante porttitor tincidunt.
              nibh.
            </p>
          </DigiFooterCard>
          <DigiFooterCard>
            <h2>Rubrik</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              magna neque, interdum vel massa eget, condimentum rutrum velit.
              Sed vitae ullamcorper sem. Aliquam malesuada nunc sed purus mollis
              scelerisque. Curabitur bibendum leo quis ante porttitor tincidunt.
              nibh.
            </p>
          </DigiFooterCard>
        </div>
        <div slot="content-bottom-left">LOGGA</div>
        <div slot="content-bottom-right">
          <p>Följ oss på</p>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Linkedin</a>
          <a href="#">Instagram</a>
        </div>
      </DigiFooter>
    </>
  );
};
