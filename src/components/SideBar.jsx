export function SideBar(){
   return <section>
    {/* logo  */}
    <div>
        <img src="" alt="" />
    </div>

    {/* contact search bar  */}
    <div>
        <input type="text" />
    </div>

    {/* contacts  */}
    <div>
        {/* pinned chats  */}
        <div>
            <p>PINNED CHATS</p>
            {/* contact card  */}
            <div className="flex bg-amber-300">
                {/* profile image  */}
                <div>
                    <img src="" alt="" />
                </div>

                {/* username and message  */}
                <div>
                    <h4>Boakai Kamara</h4>
                    <p>I a coming at your house.</p>
                </div>

                {/* time and notification batch  */}
                <div>
                    <p>10:30 AM</p>
                    <p>batch icon</p>
                </div>
            </div>
        </div>

         {/* all chats  */}
        <div>
            <p>PINNED MESSAGES</p>
            {/* contact card  */}
            <div>
                {/* profile image  */}
                <div>
                    <img src="" alt="" />
                </div>

                {/* username and message  */}
                <div>
                    <h4>Boakai Kamara</h4>
                    <p>I a coming at your house.</p>
                </div>

                {/* time and notification batch  */}
                <div>
                    <p>10:30 AM</p>
                    <p>batch icon</p>
                </div>
            </div>
        </div>
    </div>

</section>
}

