export default function NoRedButton() {
  let hasStyleSheet = false
  if (typeof window !== 'undefined') {
    hasStyleSheet =
      document.querySelectorAll('link[rel="stylesheet"]').length > 0
  }
  return <p>Stylesheet is leaked: {hasStyleSheet.toString()}</p>
}
