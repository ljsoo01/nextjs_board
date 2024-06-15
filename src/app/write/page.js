

export default function WritePage() {
    return (
        <div>
            <h4>글 작성 페이지</h4>
            {/* /api/post/new에 POST요청 */}
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="제목을 입력하세요"/>
                <br/>
                <input name="content" placeholder="내용을 입력하세요"/>
                <br/>
                <button type="submit">POST요청 버튼</button>
            </form>

            <br/>

            {/* /api/test에 GET요청 */}
            <form action="/api/test" method="GET">
                <button type="submit">GET요청 버튼</button>
            </form>
        </div>
    )
}

// 서버 통신 방식 (간단하게 URL 통해서 메시지를 주고받자 REST API)
// REST API: GET, POST, DELETE, PUT 요청하면 -> 응답줌
// GET요청: 서버에 데이터를 요청할 때
// POST요청: 서버에 데이터를 전송할 때(보안, 길다)
// 