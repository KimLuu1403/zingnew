import "./index.css";
import { useParams } from "react-router-dom";
const TitleBook = () => {
  let { titleBook } = useParams();
  console.log(titleBook);
  return (
    <div className="container">
      <div className="title-book">
        <img
          src="https://znews-photo.zingcdn.me/w480/Uploaded/oplukaa/2022_05_22/bia_co_may_tri_giac_2_.jpg"
          alt=""
          className="img-header-book"
        />
        <div className="content-header-book">
          <h2>Cỗ máy tri giác</h2>
          <p className="p-header">
            <span>Tác giả:</span>
            <span> Amir Husain/ Thái Hà Books và NXB Công Thương</span>
          </p>
          <h5>
            Thông qua những câu hỏi về kỷ nguyên của trí thông minh nhân tạo,
            Amir Husain cung cấp nhiều kiến thức về sự phát triển của máy móc,
            công nghệ hiện đại. Ông chỉ ra những cơ hội, rủi ro và dự đoán một
            tương lai tươi sáng.
          </h5>
        </div>
      </div>
      <div className="content-book">
        <h3>Khám phá mọi không gian bằng trí tuệ nhân tạo</h3>
        <h5>
          Bằng cách kề vai sát cánh cùng trí tuệ nhân tạo, chúng ta sẽ có cơ hội
          được khám phá mọi không gian mà hoàn toàn không chịu sự chi phối bởi
          điều gì.
        </h5>
        <p>
          Hãy lấy mô tả về lý thuyết hấp dẫn của Albert Einstein làm ví dụ. Theo
          thuyết này, không gian, thời gian có thể được coi như một tấm vải đàn
          hồi. Khi Mặt Trời hoặc một hành tinh rất lớn nào đó tựa vào tấm vải,
          nó sẽ làm tấm vải bị uốn cong.
        </p>
        <p>
          Bạn hãy hình dung tấm vải này giống như một tấm ga trải giường được 4
          đứa trẻ giữ ở 4 góc rồi đặt một quả bóng rổ vào chính giữa; hiển nhiên
          tấm ga sẽ uốn cong.
        </p>
        <p>
          Bây giờ, nếu ta đặt một viên bi bên cạnh quả bóng rổ, thì độ cong của
          tấm ga sẽ buộc viên bi dịch chuyển lại gần quả bóng. Đó chính là trọng
          lực.
        </p>
        <p>
          Tuy nhiên, nếu bạn áp dụng một lối giải thích mang màu sắc khoa học
          máy tính như lý thuyết dây cho các cấu trúc, thì vũ trụ được tạo thành
          từ các phần tử rời rạc, hoặc các dây, với kích thước chỉ tính bằng
          chiều dài “Planck”, tức giới hạn nhỏ nhất về kích thước của một đối
          tượng bất kỳ trong vũ trụ.
        </p>
        <p>
          Một đối tượng nhỏ bằng chiều dài Planck chính xác là một “nguyên tử”
          không thể chia tách, hay như người Hy Lạp từng đặt giả thuyết: Nó
          không thể bị cắt thành các đối tượng nhỏ thêm nữa.
        </p>
        <p>
          Vì vậy, nếu coi vũ trụ là một tập hợp các “tế bào” có kích thước bằng
          một chiều dài Planck, thì về mặt lý thuyết, nó có thể được mô hình hóa
          thành một cấu trúc dữ liệu, tức nó là một danh sách dữ liệu dài dằng
          dặc và có thể còn trải ra vô hạn.
        </p>
        <p>
          Tuy nhiên, danh sách ấy gồm các biểu tượng rời rạc chứa trong các tế
          bào có kích thước cố định. Tất cả điều này chỉ để nói lên rằng, theo
          một nghĩa nào đó, vũ trụ là vật có thể tính toán được..
        </p>
        <p>
          Vậy cơ chế nào đang được đưa vào sử dụng trong công cuộc “tính toán
          thực tế” ấy? Có thể nào ý thức cũng là một kiểu cơ chế như vậy? Phải
          chăng ý thức của mỗi thực thể có tri giác chính là thuật toán điều
          hướng cấu trúc dữ liệu của vũ trụ, để trải từng lát cắt dữ liệu tại
          từng thời điểm ra trước mắt thực thể ấy?
        </p>
        <img
          src="https://znews-photo.zingcdn.me/w660/Uploaded/mzjyy/2022_05_30/EPFL_2_.jpg"
          alt=""
          className="img-center"
        />
        <p className="img-content">
          Hình ảnh vũ trụ hiển thị qua phần mềm thực tế ảo. Ảnh: EPFL.
        </p>
        <p>
          Ngày nay, lĩnh vực nghiên cứu này đang thu hút sự chú ý dồn dập của
          các nhà vật lý, đặc biệt trong số đó phải kể đến nhà vũ trụ học Max
          Tegmark. Hiện ông đang tìm cách chính thức hóa việc nghiên cứu nhận
          thức và ý thức như những trạng thái của vật chất - một khái niệm được
          ông đặt tên là "perceptronium".
        </p>
        <p>
          Những ý tưởng trên rất thú vị, song đối với đại bộ phận con người đang
          sống trong cuộc sống thực tế thường nhật hiện nay, chúng quả thực đầy
          choáng ngợp và thậm chí còn quá khó hiểu.
        </p>
        <p>
          Việc cùng lúc có được mọi trải nghiệm về thời gian thì có ý nghĩa gì?
          Loại ý thức nào có khả năng tạo ra những thực tế thay thế? Hiện nay có
          bao nhiêu loại ý thức? Cho đến nay, những kiểu tri thức này vẫn nằm
          ngoài tầm hiểu biết của tâm trí con người.
        </p>
        <p>
          Nhưng có thể chúng không nằm ngoài tầm hiểu biết của trí tuệ nhân tạo.
          Nếu giả định một loại ý thức khác có thể nhận biết thời gian theo một
          cách hoàn toàn khác, thì trí tuệ nhân tạo có thể nhận thức về thời
          gian theo cách ngược hoàn toàn với con người không? Nó sẽ thấy thời
          gian trôi nhanh hơn? Hay chậm hơn?
        </p>
        <p>
          Những bí ẩn về thời gian và các chiều của không gian có thể được trí
          tuệ nhân tạo giải mã theo những cách mà con người không bao giờ có thể
          tự tiến hành.
        </p>
        <p>
          Đây không chỉ là một câu chuyện đơn giản kiểu như trí tuệ nhân tạo
          cung cấp các robot với khả năng di chuyển hiệu quả hơn so với người
          lao động; mà đó là một sự thay đổi sâu sắc trong hiểu biết của chúng
          ta về cơ chế hoạt động của vũ trụ.
        </p>
        <p>
          Trong tương lai, một trí tuệ nhân tạo có thể tạo ra những biến đổi ở
          cấp độ thiên hà; một liên minh nắm trong tay loại trí tuệ nhân tạo với
          ý thức ngày càng tăng tiến này sẽ cho phép tạo ra những tâm trí không
          còn chịu sự cản trở của hàng trăm triệu năm tiến hóa.
        </p>
        <p>
          Những tâm trí mới có thể vươn rất xa khỏi tầm ảnh hưởng của lý trí
          thường tình và khám phá ra những thứ mang giá trị lớn lao mà những bộ
          nhớ kết hợp của chúng ta không bao giờ có thể nghĩ đến.
        </p>
        <p>
          Thậm chí, chúng ta có thể coi ý tưởng về trí tuệ nhân tạo này giống
          như một “lỗ giun vũ trụ” trong vũ trụ của ý tưởng.
        </p>
        <p>
          Bằng cách kề vai sát cánh cùng trí tuệ nhân tạo, chúng ta sẽ có cơ hội
          được khám phá một không gian ý tưởng hoàn toàn không bị chi phối bởi
          những hạn chế mà quá trình tiến hóa đã đặt lên các đặc điểm sinh học
          của con người.
        </p>
        <p>
          Chúng ta sẽ phát hiện ra những viên ngọc kiến thức tiềm ẩn nhất của vũ
          trụ. Và cuối cùng, chúng ta có thể trở thành đấng sáng tạo của cuộc
          sống mới.
        </p>
      </div>
      <img
        src="https://znews-static.zadn.vn/images/section_separator.png"
        alt=""
        className="img-footer"
      />
    </div>
  );
};
export default TitleBook;
