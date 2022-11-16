<template>
    <el-form ref="ruleFormRef" :model="model" :rules="rules" :label-width="labelWidth" class="demo-ruleForm"
        :size="formSize" :label-position="labelPosition" status-icon>
        <slot></slot>

        <div v-if="buttonsForm" class="button-position">
            <ElementButton v-if="buttonSubmit" :label="labelSubmit" :disabled="isDisabled" dataCy="form-button-submit"
                type="submit" @click="submitForm(ruleFormRef)" />
            <ElementButton v-if="buttonReset" :label="labelReset" :disabled="isDisabled" dataCy="form-button-reset"
                type="cancel" @click="closeForm" />
        </div>
    </el-form>
</template>

<script lang="ts">
import { ref } from "vue";
import ElementButton from "./ElementButton.vue";

export default {
    components: { ElementButton },
    props: {
        buttonsForm: {
            type: Boolean,
            default: true,
            required: false,
        },
        buttonSubmit: {
            type: Boolean,
            default: true,
            required: false,
        },
        labelSubmit: {
            type: String,
            default: "create",
            required: false,
        },
        isDisabled: {
            type: Boolean,
            default: false,
            required: false,
        },
        buttonReset: {
            type: Boolean,
            default: true,
            required: false,
        },
        labelReset: {
            type: String,
            default: "reset",
            required: false,
        },
        buttonPosition: {
            type: String,
            default: "flex-end",
            required: false,
        },
        formSize: {
            type: String,
            default: "default",
        },
        labelPosition: {
            type: String,
            default: "top",
        },
        labelWidth: {
            type: String,
            default: "120px",
        },
        rules: {
            type: Object,
        },
        model: {
            type: Object,
        },
    },
    setup(_, { emit }) {
        const ruleFormRef = ref();

        const submitForm = (formEl) => {
            emit("submitForm", formEl);
        };

        const closeForm = (formEl) => {
            emit("closeForm", formEl);
        };

        return {
            ruleFormRef,
            submitForm,
            closeForm,
        };
    },
};
</script>

<style lang="scss" scoped>
.button-position {
    display: flex;
    justify-content: v-bind(buttonPosition);
}
</style>
