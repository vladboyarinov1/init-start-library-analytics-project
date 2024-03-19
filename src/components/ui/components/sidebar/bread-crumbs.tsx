import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type BreadcrumbsContextType = {
  selectedKeys: string[]
  setSelectedKeys: Dispatch<SetStateAction<string[]>>
}

const BreadcrumbsContext = createContext<BreadcrumbsContextType | undefined>(undefined)

type BreadcrumbsProviderProps = {
  children: ReactNode
}

export const BreadcrumbsProvider: React.FC<BreadcrumbsProviderProps> = ({ children }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([''])

  console.log(selectedKeys)

  return (
    <BreadcrumbsContext.Provider value={{ selectedKeys, setSelectedKeys }}>
      {children}
    </BreadcrumbsContext.Provider>
  )
}

export const useBreadcrumbs = () => {
  const context = useContext(BreadcrumbsContext)

  if (!context) {
    throw new Error('useBreadcrumbs must be used within a BreadcrumbsProvider')
  }

  return context
}
