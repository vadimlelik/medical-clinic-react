import React, { type FunctionComponent, useState } from 'react'
import { AppProvider, type IAppContext } from '../context/AppContext'
import Alert from '../Components/Alert/Alert'
import Header from '../Components/Header/Header'
import { type LayoutProps } from './LayoutProps'
import { useAlert } from '../Providers/AlertProvider/lib/useAlert'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { alertName, closeAlert, setAlertName } = useAlert()

  return (
      <div>
          <Header />
          <button onClick={() => { setAlertName('Click') }}> Click</button>

          {children}
          {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
      </div>
  )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent (props: T): JSX.Element {
    return (
        <AppProvider>
            <Layout>
                <Component {...props} />
            </Layout>
        </AppProvider>
    )
  }
}
