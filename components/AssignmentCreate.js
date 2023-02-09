export default {
  template: `
    <form @submit.prevent="addAssignment()" class="flex justify-between text-black border divide-y-2">
        <input type="text" v-model="newAssignment" class="p-1 flex-auto" />
        <button class="bg-white">Add</button>
        </form>
    `,
    data(){
        return {
            newAssignment:""
        }
    },
    methods:{
        addAssignment(){
            this.$emit('addAssignment',this.newAssignment)
            this.newAssignment=""
        }
    }
};
