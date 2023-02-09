export default {
    template:`
    <li class="p-4">
    <label class="flex justify-between">
    {{assignment.name}}
    <input type="checkbox" v-model="assignment.completed" class="mx-4"/>
    </label>
    </li>
    `,
    props:{
        assignment:Object
    }
}