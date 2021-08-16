<script>
import summaryViewVue from '../../shared/components/summaryView.vue'

export default { 
    extends: summaryViewVue,
    data() {
        return {
            header: 'KYC Details',
            placeholder: 'Search Kyc',
            buttonName: 'Add KYC',
            title: 'KYC List',
        }
    }
}
</script>
