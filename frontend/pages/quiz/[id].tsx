/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import React from 'react';
import { GetStaticProps } from 'next';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

// eslint-disable-next-line import/extensions
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExternal }) {
  return (
    <ThemeProvider theme={dbExternal.theme}>
      <QuizScreen
        externalQuestions={dbExternal.questions}
        externalBg={dbExternal.bg}
      />
    </ThemeProvider>
  );
}

QuizDaGaleraPage.defaultProps = {
  dbExternal: null,
};

QuizDaGaleraPage.propTypes = {
  // eslint-disable-next-line react/require-default-props
  // eslint-disable-next-line react/forbid-prop-types
  dbExternal: PropTypes.any,
};

// eslint-disable-next-line no-unused-vars
export const getServerSideProps: GetStaticProps = async (context: any) => {
  const [projectName, githubUser] = context.query.id.split('___');
  try {
    const dbExternal = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
    // eslint-disable-next-line arrow-body-style
      .then((respostaConvertidoEmObjeto) => respostaConvertidoEmObjeto);
    return {
      props: {
        dbExternal,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
};
