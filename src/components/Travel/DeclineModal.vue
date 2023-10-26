<template>
    <div class="l-modal">
        <form @submit.prevent="submit" class="bg-white relative top-16 rounded mx-auto max-w-sm p-4" v-on-clickaway="close">
            <div class="grid gap-4 my-3">
                <label for="text" class="">Note: </label>
                <input type="text" name="text" id="text" v-model="data.note"
                    class="focus:outline-none rounded border p-2 border-gray-300 border-solid" required>
            </div>
            <!-- <div class="grid gap-4">
                <label for="text" class="">Upload reciept: </label>
                <input id="receipt" type="file" ref="receipt" v-on:change="idUpload"
                    class="focus:outline-none rounded border p-2 border-gray-300 border-solid" required>
            </div> -->
            <button class="focus:outline-none bg-green-500 text-white rounded p-2 mt-4 block w-full">Decline Claim</button>
        </form>
    </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';
export default {
    data() {
        return {
            data: {
                note: '',
                // reciept: ''
            }
            
        }
    },
    methods: {
        close() {
            this.$emit('close')
        },
        submit() {
            this.$emit('submit', this.data)
        },
        idUpload() {
            this.idImageName = this.$refs.receipt.files[0].name
            // this.error.signature = false
            let fileToLoad = this.$refs.receipt.files[0];
            let fileReader = new FileReader();
            let vm = this.data
            fileReader.onload = function (fileLoadedEvent) {
                vm.receipt = fileLoadedEvent.target.result; // <--- data: base64
            }
            fileReader.readAsDataURL(fileToLoad);
        },
    },
    directives: {
        onClickaway: onClickaway,
    }
}
</script>

<style></style>