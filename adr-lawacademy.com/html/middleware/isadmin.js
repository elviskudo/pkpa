import Swal from 'sweetalert2'
export default function ({ $auth, redirect }) {
  if (!$auth.hasScope('admin')) {
    return redirect('/')
  }
  if (!$auth) {
    Swal.fire('Maaf, sesi anda telah habis')
    return this.$auth.logout()
  }
}
