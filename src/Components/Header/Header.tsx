import React, { useContext } from 'react'
import { AppContext, type IAppContext } from '../../context/AppContext'
import { type HeaderProps } from './HeaderProps'

const Header = (props: HeaderProps): JSX.Element => {
  const { menu } = useContext<IAppContext>(AppContext)

  return <div>Header{menu}</div>
}

export default Header
