<template>
  <section class="container py-8">
  <h2 class="text-center text-primary mb-7 fw-bold">關於我們</h2>
  <div class="row justify-content-center">
    <div class="col-md-9">
      <div class="row mb-4 pb-4">
        <div class="col-12 col-lg-6 d-flex justify-content-center">
          <img class="img-fluid object-fit mb-3" src="https://images.unsplash.com/photo-1579887829663-67706e62e6ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80" alt="about-img" style="border-radius:40px;min-height:400px;">
        </div>
        <div class="col-12 col-lg-6 d-flex align-items-center p-4">
          <div class="p-4 bg-white shadow-sm" style="border-radius:40px;">
            <h3 class="text-center fs-4 fw-bold">黑心茶葉氾濫</h3>
            <p>近幾年市面出現各種黑心茶葉，它可能含有有害化學物質、污染物或人工添加物。這些茶葉可能來自未經嚴格把關的產區，或者是在過程中使用不合法的農藥和化學物質。黑心茶葉不僅可能對人體有害,
              還可能對環境造成危害。我們強烈建議消費者選擇來自可靠品牌並經過嚴格品質把關的茶葉</p>
          </div>
        </div>
      </div>
      <div class="row flex-row-reverse d-flex justify-content-center pb-4">
        <div class="col-12 col-lg-6 d-flex justify-content-center">
          <img class="img-fluid object-fit mb-3" src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80" alt="about-img" style="border-radius:40px;min-height:400px;">
        </div>
        <div class="col-12 col-lg-6 d-flex align-items-center">
          <div class="p-4 bg-white shadow-sm" style="border-radius:40px;">
            <h3 class="text-center fs-4 fw-bold">提供給顧客最好的品質</h3>
            <p>我們的品牌初衷是為顧客提供最高品質的產品與服務。我們相信，只有提供最好的產品和服務，才能得到顧客的信任和支持。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="container text-center py-5 bg-secondary">
  <p>品嘗一杯好茶，紓解工作壓力<br>愛喝茶的你，睡眠總是不好，想要在工作片刻<br>喜歡喝茶，又怕自己買的品質參差不齊</p>
  <router-link href="#" class="btn btn-primary" to="/products">了解更多</router-link>
</section>
<section class="container py-5">
  <div class="row d-flex justify-content-center">
    <div class="col-9">
      <div class="row">
        <h2 class="text-center text-primary mb-7 fw-bold">三大堅持</h2>
        <div class="col-12 col-lg-4 mb-3 mb-lg-0">
            <div class="card h-100 shadow-sm">
                <div class="d-flex justify-content-center">
                  <span class="material-icons text-primary" style="font-size: 120px;">
                    military_tech
                  </span>
                  <!-- <img src="../../assets/images/img3.jpg" width="250" height="250" class="card-img-top object-fit mb-5"
                    alt="aboutus-img"> -->
                </div>
                <div class="card-body p-5">
                  <h5 class="text-primary card-title fs-4 lh-29 fw-bold">品質保證</h5>
                  <p>我們堅持從原料和生產過程中嚴格把關，確保產品品質達到標準。</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mb-3 mb-lg-0">
            <div class="card h-100 shadow-sm">
                <div class="d-flex justify-content-center">
                  <span class="material-icons text-primary" style="font-size: 120px;">
                    energy_savings_leaf
                  </span>
                  <!-- <img src="../../assets/images/img3.jpg" width="250" height="250" class="card-img-top object-fit mb-5"
                    alt="aboutus-img"> -->
                </div>
                <div class="card-body p-5">
                  <h5 class="card-title text-primary fs-4 lh-29 fw-bold">鮮度保證</h5>
                  <p>我們採用先進的包裝技術，確保茶葉鮮度。</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 mb-3 mb-lg-0">
            <div class="card h-100 shadow-sm">
                <div class="d-flex justify-content-center">
                  <span class="material-icons text-primary" style="font-size: 120px;">
                    gpp_good
                  </span>
                  <!-- <img src="../../assets/images/img3.jpg" width="250" height="250" class="card-img-top object-fit mb-5"
                    alt="aboutus-img"> -->
                </div>
                <div class="card-body p-5">
                  <h5 class="card-title text-primary fs-4 lh-29 fw-bold">滿意保證</h5>
                  <p>我們提供售後服務，如果您對我們的產品不滿意，我們將為您提供退款或更換產品的服務。</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="container py-5 bg-secondary">
  <div class="row d-flex justify-content-center p-3">
    <h2 class="text-center text-primary mb-7 fw-bold">聯絡我們</h2>
    <div class="col-md-6 bg-white p-3 bg-secondary shadow-sm">
      <div class="mb-3">
        <label for="mail-address" class="form-label">Email</label>
        <input type="email" class="form-control" id="mail-address" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label for="phone-number" class="form-label">聯絡電話</label>
        <input type="email" class="form-control" id="phone-number" placeholder="0987526513">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">留言內容</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="d-flex justify-content-center mb-3">
        <a class="btn btn-primary" href="#">送出</a>
      </div>
    </div>
  </div>

</section>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
