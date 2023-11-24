const useAuth = () => {
  const token = JSON.parse(
    (localStorage.getItem('userInfo') as string) || '{}'
  ).token
  return {
    isAuthenticated: !!token
  }
}

export default useAuth
