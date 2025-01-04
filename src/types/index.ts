import { SetStateAction } from "react"

export interface IThemeType {
    theme: string
    setTheme: React.Dispatch<SetStateAction<string>>
}
export interface ILanguageType {
    language: string
    setLanguage: React.Dispatch<SetStateAction<string>>
}
export interface ICodeType {
    code: string | undefined
    setCode: React.Dispatch<SetStateAction<string | undefined>>
}
