import { useBounties } from '../hooks/useContentData'

export function GrantsBounty() {
  const { open: openBounties, completed: completedBounties } = useBounties()
  
  return (
    <div>
      <header className="uui-section_heroheader14">
        <div className="uui-page-padding">
          <div className="uui-container-large">
            <div className="uui-space"></div>
            <div className="uui-heroheader14_component">
              <div className="uui-text-align-center">
                <div className="uui-max-width-xlarge">
                  <h1 className="uui-heading-xlarge">Build the new Web3 with us</h1>
                  <div className="uui-space-small"></div>
                  <div className="uui-max-width-large align-center">
                    <div className="uui-text-size-xlarge">Massa’s Grants Program est fait pour soutenir les initiatives communautaires.</div>
                  </div>
                  <div className="uui-space-large"></div>
                  <div className="uui-button-row button-row-center is-reverse-mobile-landscape">
                    <a href="https://docs.google.com/forms/d/1aw72tG9ZX8DsFOn_I5UMasJw1AluxO2rCeLX31UJcdg/viewform?edit_requested=true" target="_blank" rel="noreferrer" className="button w-button">
                      Get funded
                    </a>
                  </div>
                  <div className="uui-space-large"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <img src="/images/Bigpixel.svg" loading="lazy" width="Auto" alt="" className="image-40" />
      </section>

      <section className="logos-without-title">
        <div className="container-4"></div>
      </section>

      <section className="section-14">
        <div className="w-layout-blockcontainer bounties_container w-container">
          <h2 className="heading-4-copy">Open bounties</h2>
          <div className="uui-space-large"></div>
          <div>
            {openBounties.map(bounty => (
              <div key={bounty.id} className="collection-item-4">
                <h3 className="heading-6">{bounty.title}</h3>
                <div className="uui-text-size-large-description">{bounty.description}</div>
                <div className="uui-text-size-large-status">{bounty.status}</div>
                <div className="uui-text-size-large-amount">{bounty.amount}</div>
                <div className="uui-space-xsmall"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-layout-blockcontainer bounties_container w-container">
          <h2 className="heading-4-copy">Bounties completed</h2>
          <div className="uui-space-large"></div>
          <div>
            {completedBounties.map(bounty => (
              <div key={bounty.id} className="collection-item-7">
                <h3 className="heading-6">{bounty.title}</h3>
                <div className="uui-text-size-large-description">{bounty.description}</div>
                <div className="uui-text-size-large-status">{bounty.status}</div>
                <div className="uui-text-size-large-amount">{bounty.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-15">
        <h2 className="heading-4">FAQ</h2>
        <section className="rl_section_faq6">
          <div className="rl-padding-global">
            <div className="rl-container-large">
              <div className="rl-padding-section-large">
                <div className="w-layout-grid rl_faq6_list-grid">
                  {[
                    {
                      question: 'Is my application confidential and anonymous for a Grant?',
                      answer:
                        'The Massa team will be the only one to read applications. All information and your identity will remain secret inside the massa team. However, external advisors may be hired to review your project. Then, you can highlight if you need some information to stay confidential.',
                    },
                    {
                      question: 'In which form will I receive the grant?',
                      answer:
                        'The grant will be given in Massa token or with fiat. It could be both. Grants will be paid out upon achieving mutually agreed-upon milestones. Generally, prototyping a feature-full product must happen before even the first tranche is paid.',
                    },
                    {
                      question: 'Does a for-profit company or project can apply for a Grant?',
                      answer: 'Yes! any kind of project are welcomed to apply.',
                    },
                    {
                      question: 'How much can I ask for a Grant?',
                      answer:
                        'We do not have a threshold. It depends on the needs of the project. Nevertheless, your demand must be coherent with the reality of your development.',
                    },
                    {
                      question: 'What if my application for a Massa Grant fails?',
                      answer:
                        'No problem! You can apply as many times as you want. Take into account the advice returned by the jury to increase your chances on the next round.',
                    },
                    {
                      question: 'How long should I wait to get an answer?',
                      answer: 'If we are not overloaded, you can expect to receive a response to your application within two weeks.',
                    },
                    {
                      question: 'Where can I send my application if I do not wish to use the Google Form?',
                      answer: 'You can write us on grants@massa.foundation.',
                    },
                    {
                      question: 'Does Massa offer other help?',
                      answer:
                        'If possible, we will endeavor to help grant recipients with product development, fundraising, and talent recruitment as well.',
                    },
                    {
                      question: 'Do you have any recommendations?',
                      answer:
                        'Engage the community early (Discord, Reddit, Twitter). Highlight teasers, share progress, and collect strong feedback before submitting your proposal.',
                    },
                  ].map((item, index) => (
                    <div className="rl_faq6_accordion" key={index}>
                      <div className="rl_faq6_question">
                        <div className="rl_faq6_question-text">{item.question}</div>
                        <div className="rl_faq6_icon-wrapper">
                          <div className="rl_faq6_icon">
                            <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M25.3334 15.6668V16.3334C25.3334 16.7016 25.0349 17.0001 24.6667 17.0001H17.0001V24.6667C17.0001 25.0349 16.7016 25.3334 16.3334 25.3334H15.6667C15.2986 25.3334 15.0001 25.0349 15.0001 24.6667L15.0001 17.0001H7.33341C6.96522 17.0001 6.66675 16.7016 6.66675 16.3334V15.6668C6.66675 15.2986 6.96522 15.0001 7.33341 15.0001H15.0001V7.33341C15.0001 6.96522 15.2986 6.66675 15.6667 6.66675H16.3334C16.7016 6.66675 17.0001 6.96522 17.0001 7.33341V15.0001L24.6667 15.0001C25.0349 15.0001 25.3334 15.2986 25.3334 15.6668Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="rl_faq6_answer" style={{ width: '100%' }}>
                        <div className="rl_faq6_answer-wrapper">
                          <p className="rl-text-style-regular">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="section-8-copy">
        <div className="w-layout-blockcontainer container-2-copy w-container">
          <h2 className="heading-4-copy">Any questions</h2>
          <div className="uui-space-large"></div>
          <a href="http://t.me/morosandaniel" target="_blank" rel="noreferrer" className="button w-button">
            Contact us
          </a>
        </div>
      </section>

      <section>
        <img src="/images/Bigpixel.svg" loading="lazy" width="Auto" alt="" />
      </section>

      <section className="section-10-copy">
        <div className="uui-container-large-2">
          <div className="uui-padding-vertical-xhuge">
            <div className="div-block-5">
              <div className="div-block-4">
                <div className="uui-cta11_component">
                  <div className="uui-text-align-center-2">
                    <h3 className="heading-7">Join our Developper</h3>
                    <h3 className="heading">community on Discord</h3>
                    <div className="uui-space-xsmall">
                      <div className="uui-space-large"></div>
                    </div>
                    <a href="https://discord.com/invite/massa" className="button w-button" target="_blank" rel="noreferrer">
                      Join
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GrantsBounty

