import Swal from 'sweetalert2'

// const swal = new SweetAlert2()

export default function ({ $auth, redirect }) {
  if (!$auth.hasScope('useractive')) {
    Swal.fire(
      'Akses ditolak!',
      'Maaf, Anda belum bisa mengakses halaman dashboard',
      'error'
    )
    // return window.history.go(-1)
    return redirect('/')
  }
}
