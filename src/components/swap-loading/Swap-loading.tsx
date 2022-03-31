import { SwapLoadingStyles } from "./swap-loading-styles"

interface Props {
  sizePx: number
}

export const SwapLoading = ({ sizePx }: Props) => {
  return (
    <SwapLoadingStyles sizePx={sizePx}>
      <div className="swap"></div>
    </SwapLoadingStyles>
  )
}
