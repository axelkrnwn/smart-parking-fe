import CourseStatistic from "@/features/course/view/course-statistic"
import UserList from "@/features/user/view/user-list"

const AccountDashboard = () => {

    return (<>
        <div className="flex justify-between w-full">
            <div className="p-5 w-1/2">
                <UserList />
            </div>
            <div className="p-5 w-1/2">
                <CourseStatistic />
            </div>
        </div>
    </>
    )
}

export default AccountDashboard