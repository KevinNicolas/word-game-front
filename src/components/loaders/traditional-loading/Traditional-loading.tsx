import { TraditionalLoadingStyles } from "./traditional-loading-styles"

interface Props { color?: string, size?: number }

export const TraditionalLoading = ({ color, size }: Props) => {
  return (
    <TraditionalLoadingStyles color={color} size={size}>
      <div className="traditional"></div>
    </TraditionalLoadingStyles>
  )
}
