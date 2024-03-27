<template>
    <div>
        {{ prdInfo }}
    </div>
</template>

<script>
export default {
    name: 'AllInOne',
    props: ['prdInfo'], // props를 문자열 배열로 정의합니다.
    data() {
        return {
            prd: [
                { info: '배고프다' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>