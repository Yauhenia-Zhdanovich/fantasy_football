import type { BoxProps } from '@mui/material'

export type Nullable<T> = T | null

export interface ImageProps extends BoxProps {
  src: string
  alt: string
}
