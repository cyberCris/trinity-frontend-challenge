import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const displayToast = ({ message }) => {
    toast(message);
};
// let toastId = null;

// export default function showToast(message) {
//     // toastId = toast(message);

//     toast(message);
// }
// className: css({
//     background: '#00FF00 !important',
// }),
