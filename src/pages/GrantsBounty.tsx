import { useEffect, useState } from 'react'
import { useBounties } from '../hooks/useContentData'

export function GrantsBounty() {
  const { open: openBounties, completed: completedBounties } = useBounties()
  const [openFaqItems, setOpenFaqItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    document.body.classList.add('page-grants-theme')
    return () => {
      document.body.classList.remove('page-grants-theme')
    }
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaqItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }
  
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
                    <div className="uui-text-size-xlarge">Massa's Grants Program is designed to support community initiatives.</div>
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
      <section className="logos-without-title">
        <div className="container-4"></div>
      </section>

      <section className="section-14 section-14-open">
        <div className="w-layout-blockcontainer bounties_container bounties-open w-container">
          <h2 className="heading-4-copy">Open bounties</h2>
          <div className="uui-space-large"></div>
          <div>
            {openBounties.map(bounty => (
              <div key={bounty.id} className="collection-item-4">
                <h3 className="heading-6">{bounty.title}</h3>
                <div className="uui-text-size-large-description">{bounty.description}</div>
                {bounty.details && (
                  <div className="uui-text-size-large-description" style={{ marginTop: '1rem' }}>
                    {bounty.details}
                  </div>
                )}
                <div className="uui-text-size-large-status">{bounty.status}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                  {openBounties.indexOf(bounty) < 2 && (
                    <svg width="24" height="24" viewBox="0 0 143 137" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                      <path d="M51.4872 3.48112L51.2336 3.88765L51.1322 3.7098L51.3351 3.37949L45.7552 0.0256348L38.7042 11.7895L44.4363 15.2196L40.9108 21.0889L46.4907 24.4427L46.5668 24.2903L46.6682 24.4681L46.7443 24.5952L52.3749 27.9744L48.8495 33.8437L43.1174 30.4136L39.5919 36.2829L34.2403 33.0561H33.733L30.3344 38.722L24.6023 35.292L21.0768 41.1612H21.0261L26.7835 44.6167L23.4102 50.2319L23.7146 50.7654L28.9901 53.916L25.4646 59.7853L31.1967 63.2154L27.6712 69.0846L21.9645 65.6545H21.7616L21.8123 65.5529L16.2324 62.199L12.7069 68.0683L6.84806 64.5366L6.36616 65.375H6.56906L4.15956 69.4149C4.15956 69.3133 4.15956 69.2117 4.15956 69.11L3.3733 70.4312L3.52548 70.5329L0 76.4021L5.5799 79.756L5.73208 79.5019H5.93498L5.73208 79.8322L11.312 83.1861L14.8375 77.3168L20.5695 80.7469L24.095 74.8776L35.5338 81.7632L39.0593 75.894L44.6645 79.2732L48.19 73.404L42.5848 70.0247L46.1102 64.1555L40.3782 60.7254L43.9036 54.8561L41.3166 53.3062L38.1716 51.4006L41.6971 45.5314L47.4291 48.9615L50.9546 43.0922L56.6867 46.5223L60.2122 40.653L65.8174 44.0323L69.3429 38.1631L63.7376 34.7838L67.2631 28.9145L55.9765 22.1306L59.502 16.2614L53.6431 12.7296L57.1686 6.86039L51.5887 3.50653L51.4872 3.48112Z" fill="currentColor"/>
                      <path d="M107.819 137L93.8946 112.812L81.7456 133.875H66.0712L53.9476 112.812L40.0486 136.949L37.9688 135.755C33.4541 133.163 29.2185 130.089 25.4394 126.608L24.019 125.312L45.9835 87.1241H46.5415L46.6937 86.9717H61.8355L73.9845 108.035L86.1334 86.9717H101.656L123.747 125.287L122.377 126.608C119.004 129.835 115.073 132.757 109.975 135.755L107.87 137H107.819ZM30.1316 124.347C32.6932 126.532 35.4325 128.565 38.2985 130.343L53.9476 103.157L68.8611 129.047H78.981L93.8946 103.157L109.544 130.318C112.663 128.361 115.301 126.405 117.584 124.372L98.7897 91.7992H88.8219L73.9084 117.69L58.9949 91.7992H48.8242L30.1062 124.347H30.1316Z" fill="currentColor"/>
                      <path d="M142.363 67.4075C142.211 70.4564 141.78 73.6578 140.994 77.3928H102.949L97.9017 68.627L112.815 42.7363H82.9882L77.9409 33.9705L97.6227 0C100.819 1.16877 103.887 2.5408 106.779 4.1161L90.166 32.9034H120.018L125.066 41.5421L110.152 67.4329H142.363V67.4075Z" fill="currentColor"/>
                    </svg>
                  )}
                  <div className="uui-text-size-large-amount" style={{ fontSize: '1.5rem', fontWeight: '600' }}>{bounty.amount}</div>
                </div>
                <div className="uui-space-xsmall">                                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-14 section-14-completed">
        <div className="w-layout-blockcontainer bounties_container bounties-completed w-container">
          <h2 className="heading-4-copy">Bounties completed</h2>
          <div className="uui-space-large"></div>
          <div>
            {completedBounties.map(bounty => (
              <div key={bounty.id} className="collection-item-7">
                <h3 className="heading-6">{bounty.title}</h3>
                <div className="uui-text-size-large-description">{bounty.description}</div>
                <div className="uui-text-size-large-status">{bounty.status}</div>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {bounty.link && (
                    <a href={bounty.link} target="_blank" rel="noreferrer">
                      Link
                    </a>
                  )}
                  {bounty.github && (
                    <a href={bounty.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                  {bounty.githubFrontend && (
                    <a href={bounty.githubFrontend} target="_blank" rel="noreferrer">
                      GitHub (Frontend)
                    </a>
                  )}
                </div>
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
                  ].map((item, index) => {
                    const isOpen = openFaqItems.has(index)
                    return (
                      <div key={index} className="rl_faq6_accordion">
                        <div className="rl_faq6_question" onClick={() => toggleFaq(index)}>
                          <div className="rl_faq6_question-text" style={{ fontWeight: '700' }}>{item.question}</div>
                          <div className="rl_faq6_icon-wrapper">
                            <div className="rl_faq6_icon">
                              {isOpen ? (
                                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M7.33341 15.6668H24.6667C25.0349 15.6668 25.3334 15.9653 25.3334 16.3334V16.3334C25.3334 16.7016 25.0349 17.0001 24.6667 17.0001H7.33341C6.96522 17.0001 6.66675 16.7016 6.66675 16.3334V16.3334C6.66675 15.9653 6.96522 15.6668 7.33341 15.6668Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              ) : (
                                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M25.3334 15.6668V16.3334C25.3334 16.7016 25.0349 17.0001 24.6667 17.0001H17.0001V24.6667C17.0001 25.0349 16.7016 25.3334 16.3334 25.3334H15.6667C15.2986 25.3334 15.0001 25.0349 15.0001 24.6667L15.0001 17.0001H7.33341C6.96522 17.0001 6.66675 16.7016 6.66675 16.3334V15.6668C6.66675 15.2986 6.96522 15.0001 7.33341 15.0001H15.0001V7.33341C15.0001 6.96522 15.2986 6.66675 15.6667 6.66675H16.3334C16.7016 6.66675 17.0001 6.96522 17.0001 7.33341V15.0001L24.6667 15.0001C25.0349 15.0001 25.3334 15.2986 25.3334 15.6668Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              )}
                            </div>
                          </div>
                        </div>
                        <div 
                          className="rl_faq6_answer" 
                          style={{ 
                            width: '100%', 
                            maxHeight: isOpen ? '1000px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out',
                            paddingTop: isOpen ? '0' : '0',
                            paddingBottom: isOpen ? '0' : '0',
                            opacity: isOpen ? 1 : 0
                          }}
                        >
                          <div className="rl_faq6_answer-wrapper">
                            <p className="rl-text-style-regular">{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
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
          <a href="mailto:kevin@massa.foundation" className="button w-button">
            Contact us
          </a>
        </div>
      </section>

      <section className="section-10-copy">
        <div className="uui-container-large-2">
          <div className="uui-padding-vertical-xhuge">
            <div className="div-block-5">
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
      </section>
    </div>
  )
}

export default GrantsBounty

