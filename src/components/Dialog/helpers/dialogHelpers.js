export const openDialog = (ref) => {
  ref.current.showModal()
}

export const closeDialog = (ref) => {
  ref.current.close()
}