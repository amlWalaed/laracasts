export default {
    template:`
    <button :class="{
        'bg-gray-200 hover:bg-gray-400 rounded border py-2 px-5':true,
        'bg-red-400 hover:bg-red-600':type ==='danger',
        'bg-blue-400 hover:bg-blue-600':type ==='primary',
        'bg-green-400 hover:bg-green-600':type ==='confirm',
    }">
    <slot />
    </button>
    `,
    data(){
        return {

        }
    },
    props:{
        type:{
            type: String,
            default: "primary",
        }
    }
}