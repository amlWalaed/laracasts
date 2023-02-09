export default {
    template:`
    <div :class="{
        'bg-gray-700 p-4 border-gray-600 rounded':true,
        'bg-white p-4 border-white text-black' : theme=='light',

}">
        <h2 v-if="$slots.heading">
            <slot name="heading"/>
        </h2>
            <slot/>
    </div>
    `,
    props:{
        theme:{
            default :'dark'
        }
    }
}