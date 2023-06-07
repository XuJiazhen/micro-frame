<!-- <template>
    <div class="physical-park">
        <div class="physical-park-top">
            <div class="physical-park-add">
                <el-button type="primary">新增物理园区</el-button>
                <span>已选0项</span>
            </div>
            <div>
                <el-popover placement="bottom" title="Title" :width="200" trigger="click">
                    <template #reference>
                        <el-button class="m-2">Click to activate</el-button>
                    </template>
                   <div>
                     
                   </div>
                </el-popover>
            </div>
        </div>
        <Table :tabledataProps=tabledatas>
            <template v-slot:handler>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </template>
        </Table>

    </div>
</template>
<script lang="ts" setup>
import PhysicalParkModel from '@/util/interface/physical_park_interface';
import Table from "@/ui/dataSerch/widget/table/index.vue"
import { TableInterface } from '@/util/interface/table_interface';

const tableData: PhysicalParkModel[] = [{
    "name": "名称1",
    "gid": "gid",
    "abbreviation": "abbreviation",
    "number": "number",
    "eoc": "eoc",
    "city": "city",
    "area": "area"
}]
const tabledatas = {
    data: [{
        "property": "name",
        "label": "园区名称",
    }, {
        "property": "gid",
        "label": "园区GID",
    },
    {
        "property": "abbreviation",
        "label": "园区简称",
    },
    {
        "property": "number",
        "label": "园区编号",
    },
    {
        "property": "ecc",
        "label": "所谓ECC",
    },
    {
        "property": "city",
        "label": "城市",
    },
    {
        "property": "area",
        "label": "区域",
    }],
    tableData: tableData,
    select: false
}
const handleEdit = (index: number, row: TableInterface) => {
    console.log(index, row)
}
// 删除操作
const handleDelete = (index: number, row: TableInterface) => {
    console.log(index, row)
}

</script>

<style lang="scss">
.physical-park-top {
    display: flex;
    height: 1rem;
    margin-bottom: .2rem;
    margin-top: .4rem;
    align-items: center;
    justify-content: space-between;
    .physical-park-add {
        display: flex;

        >span {
            margin-left: 10px;
            font-size: .5rem;
        }
    }
}
</style> -->
