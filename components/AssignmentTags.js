export default {
    template:`
    <div class="flex gap-1 justify-center">
        <span v-for="tag in initialTags" class="rounded border py-1 px-1 text-sm cursor-pointer" :class="{ 'text-lime-500 border-lime-500':currentTag === tag}" @click="$emit('update:currentTag' , tag)">{{tag}}</span>
    </div>
    `,
    props:{
        initialTags:Array,
        currentTag:String,
    }
}